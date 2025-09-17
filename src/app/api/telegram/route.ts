import { NextRequest, NextResponse } from 'next/server';
import { telegramService } from '../../lib/telegram';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, method } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }


    const success = await telegramService.sendContactForm({
      name,
      phone,
      method
    });

    if (!success) {
      return NextResponse.json(
        { error: 'Ошибка отправки уведомления' },
        { status: 500 }
      );
    }

    await telegramService.sendAdminNotification(
      `✅ Новая заявка от ${name} получена и обработана`
    );

    return NextResponse.json(
      { 
        message: 'Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.',
        telegram: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Telegram API error:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке заявки' },
      { status: 500 }
    );
  }
}