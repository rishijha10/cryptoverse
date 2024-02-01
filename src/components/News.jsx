import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetNewsQuery } from "../services/cryptoNewsAPI";

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const count = simplified ? 8 : 36;
  const { data: cryptoNews, isFetching } = useGetNewsQuery();
  console.log(cryptoNews);

  const newsData = cryptoNews?.data.slice(0, count);

  if (isFetching) return "...loading";
  return (
    <Row gutter={[24, 24]}>
      {newsData?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                  src="https://play-lh.googleusercontent.com/mBJAI03dkaMJp6Fl0sKyQBLCMAxTDuxdy2dNGFuxzcsx232zmIsm6vXOZWNGfql8KDk"
                />
              </div>
              <p>
                {news.shortDescription > 70
                  ? `${news.shortDescription.substring(0, 70)}...`
                  : news.shortDescription}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{`${news.publisher}`}</p>
                <p>{news.when}</p>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
