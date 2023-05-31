interface HotelCardProps {
  data: Record<string, any>;
}
const HotelCard: React.FC<HotelCardProps> = ({ data }) => {
  return <div>{/* <img src={data.imageSrc} alt="h" /> */}</div>;
};

export default HotelCard;
