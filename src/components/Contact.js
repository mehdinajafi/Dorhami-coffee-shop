import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact-us">
            {/* Start contact-us paragraph  */}
            <div className="contact-us-paragraph">
                <h1>ارتباط با ما</h1>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <div>
                    <p>تلفن:‌09123456789</p>
                    <p>ایمیل: test@email.com</p>
                    <p>تلگرام: t.me/test</p>
                </div>
            </div>
            {/* End contact-us paragraph  */}

            {/* Start contact-us form  */}
            <div className="contact-us-form">
                <h3>نظر شما در مورد کافه دورهمی</h3>
                <form>
                    <input type="text" id="form-name" placeholder="نام شما..." />
                    <input type="text" id="form-phone" placeholder="تلفن شما..." /><br />
                    <textarea type="text" id="form-comment" placeholder="نظر، انتقاد،‌ پیشنهاد"></textarea><br />
                    <button id="form-send-btn">ارسال</button>
                </form>
            </div>
            {/* End contact-us form  */}
        </section>
    )
}

export default Contact;