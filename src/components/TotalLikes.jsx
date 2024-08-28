function TotalLikes({ totalLikes }) {
  return <h2>You have liked {totalLikes} {totalLikes===1 ? "quote" : "quotes"}</h2>;
}

export default TotalLikes;
