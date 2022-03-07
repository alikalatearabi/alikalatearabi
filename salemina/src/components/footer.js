import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div id='footer'>
               <div className='footer-section'>
                   <h1>درباره ما</h1>
                   <p>
                   سالــمینا با همراهی متخصصین صنایع غذایی و کارشناسان فناوری، در سال 1399 فعالیت خود را آغاز نمود تا مصرف‌کننده را در انتخاب سالم‌تر یاری دهد. کافیست کاربر بارکُد درج‌شده بر روی بسته‌بندی محصولات غذایی را اسکن نماید تا رتبه سالمینا به محصول با جزئیات سلامت به وی ارائه شود.
                   </p>
               </div>
               <div className='footer-section'>
                   <h1>تماس با ما</h1>
                   <p>
                   آدرس: تهران، تقاطع آیت الله رفسنجانی و کردستان، شهرک فجر، مرکز نوآوری نوآ، شتابدهنده اسمارت‌ایکس
                   </p>
                   <p>
                   شماره تماس:۸۸۲۱۸۲۶۴-۰۲۱
                   </p>
                   <p>
                   ایمیل: info@salemina.ir
                   </p>
               </div>
               <div className='footer-section'>
                   <h1>همکاران ما</h1>
                   <p>گروه توسعه و نوآوری بن دا</p>
                   <p>شتابدهنده اسمارت ایکس</p>
               </div>
            </div>
        );
    }
}

export default footer;