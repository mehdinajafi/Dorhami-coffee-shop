import React from "react";
import {Link} from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            {/* Start introduce coffee shop */}
            <section id="introduction">
                <div>
                    <h3>کافه دورهمی</h3>
                    <h1>خوشمزه ترین قهوه شهر</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <Link to="/menue/all" id="linktomenue">رفتن به منو</Link>
                </div>
                <img src={require("../assets/images/main-image.jpg")} alt="عکس-کافی-شاپ"/>
            </section>
            {/* End introduce coffee shop */}

            {/* Start Working Hour section */}
            <section id="workingHour">
                <img src={require("../assets/images/coffee.jpg")} alt="ساعت-کاری-کافی-شاپ"/>
                <div className="open-close-hour">
                    <h1>ساعات کاری</h1>
                    <h3>23 - 17</h3>
                </div>
            </section>
            {/* End Working Hour section */}
        </section>
    )
}

export default Home;