export default function Profile() {
    const children = [
      {
        type: 'Photo',
        name: 'Aklilu Lemma',
        imageUrl: 'https://i.imgur.com/OKS67lhm.jpg',
        size: 70
      },
      {
        type: 'About',
        info: 'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
      }
    ]
  
    function Card(props) {
      if(props.type.toUpperCase() == 'PHOTO') {
        return (
          <>
            <h1>{props.type}</h1>
            <img
              className="avatar"
              src={props.imageUrl}
              alt={props.name}
              width={props.size}
              height={props.size}
            />
          </>
        )
      } else {
        return (
          <>
            <h1>{props.type}</h1>
            <p>{props.info}</p>
          </>
        )
      }
    }

    return (
      <div>
          {children.map((child, index) =>
            <div key={index} className="card">
              <div className="card-content">
                <Card {...child}/>
              </div>
            </div>
          )}
      </div>
    );
  }