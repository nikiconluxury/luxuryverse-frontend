import Link from "next/link";

interface ContentData {
  title: string;
  paragraphs: JSX.Element[];
  socialIcons: string[];
  tags: string[];
}

interface DetailsAreaProps {
  contentData: ContentData;
}

const TextArea = ({ contentData }: DetailsAreaProps) => {
  const { title, paragraphs, socialIcons, tags } = contentData;

  return (
    <section className="blog-details-area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 center-document">
            <div className="blog-details-wrap">
              <div className="blog-details-content">
              <h2 className="title">{title}</h2>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="post-tags">
                        <ul className="list-wrap">
                          {tags.map((tag, index) => (
                            <li key={index}><Link href="#">{tag}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="blog-post-share">
                        <ul className="list-wrap">
                          {socialIcons.map((icon, index) => (
                            <li key={index}><Link href="#"><i className={icon}></i></Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextArea;
