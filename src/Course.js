import React from 'react';

/* 
Course Props u Icindeki Degerleri Yazdirmak Icin
Course Props una Yazdirilacak Degerlerin Attribute lari 
Degisken Adi Gibi Parametre Olarak Verilir 
*/
function Course({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">

          {/* Image Degiskeninden Gelen Degerleri Yazdirmak Icin
              JSX Formatini Kullaniyoruz*/}
          <img src={image} alt="my-courses" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Course;
