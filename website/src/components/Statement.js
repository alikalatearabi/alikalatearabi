import React from 'react';

import icon1 from '../image/icon/icon1.png'
import icon2 from '../image/icon/icon2.png'
import icon3 from '../image/icon/icon3.png'

const Statement = () => {
    return (
        <div className='statement-wrapper'>
            <div className="Statement-section">
                <h1>بیانیه استقلال سالمینا  </h1>
                <p>پردازش و رتبه‌بندی سالمینا مستقل از برندهای تولیدکننده است </p>
                <h5>هدف ما کمک به مصرف‌کننده برای انتخاب سالم‌تر است. با انجام این کار، تولیدکننده نیز بیشتر از قبل به تولید محصولات غذایی سالم‌تر ترغیب می‌شود.</h5>
                <div className='icon-container'>
                    <div className='icon-wrapper'>
                        <img src={icon1} alt="" className='icon-image' />
                        <p className='icon-text'>برندهای غذایی نمی‌توانند برای تبلیغات به سالمینا پول پرداخت کنند. هیچ گونه تبلیغی پذیرفته نمی‌شود.    </p>
                    </div>
                    <div className='icon-wrapper'>
                        <img src={icon2} alt="" className='icon-image' />
                        <p className='icon-text'>رتبه‌بندی و توصیه‌های جایگزین بدون تأثیر از برندهای تولیدکننده غذایی است.   </p>
                    </div>
                    <div className='icon-wrapper'>
                        <img src={icon3} alt="" className='icon-image' />
                        <p className='icon-text'>سالمینا داده‌های کاربران را نمی‌فروشد و محرمانه باقی می‌ماند.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statement;