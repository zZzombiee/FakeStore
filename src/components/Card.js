const Card = (props) => {
  const { data } = props;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-[300px]">
        <img src={data.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p className=" overflow-hidden h-11">{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{data.category}</div>
          <div className="badge badge-outline">$ {data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
