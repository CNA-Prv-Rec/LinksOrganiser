export default function MusicCard(props: { id: bigint, url: string, artist:string, song:string, category:string, className: string }) {
  return (
    <div className="card" >
      <div className="card-content">
        <div className={props.className}>
        <div className="card-title">
          {props.artist}
        </div>
        <div className="card-body">
          <a href={props.url} target="_blank" rel="noopener noreferrer">{props.song}</a>
        </div>
        <div className="card-footer">
           <i>{props.category}</i>
        </div>
      </div>
   </div>
  </div>
  );
}