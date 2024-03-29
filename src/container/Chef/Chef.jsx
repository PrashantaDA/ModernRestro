import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
  return (
    <div className="app__bg section__padding app__wrapper">

      <div className="app__wrapper_img app_wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>
        <div className="app__chef-content">

          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            </p>
          </div>

          <div className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </div>

        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>

      </div>
    </div>
  )
}
export default Chef;
