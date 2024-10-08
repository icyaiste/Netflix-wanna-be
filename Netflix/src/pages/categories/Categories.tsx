import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();

  const genres = [
    {
      name: 'Action',
      image:
        'https://miro.medium.com/v2/resize:fit:633/1*hZ02u2U2k8K4nc8l2zA2pQ.jpeg',
    },
    {
      name: 'Drama',
      image:
        'https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_320%2Cc_limit/MSDTITA_FE057.jpg',
    },
    {
      name: 'Comedy',
      image:
        'https://media.gq-magazine.co.uk/photos/65e99a7c6c03b53bb6ca3042/4:3/w_900,h_675,c_limit/Best-comedy-films.jpg',
    },
    {
      name: 'Adventure',
      image:
        'https://nofilmschool.com/media-library/adventure-genre.png?id=34067601&width=1245&height=700&quality=90&coordinates=64%2C0%2C65%2C0',
    },
    {
      name: 'Western',
      image:
        'https://pyxis.nymag.com/v1/imgs/554/69b/97ae591b1ea1675646e7f1f45a670a5e02-greatest-westerns-updated-dec-2020-lede-.rhorizontal.w1100.jpg',
    },
    {
      name: 'Crime',
      image:
        'https://nofilmschool.com/media-library/defining-the-true-crime-genre-in-movies-and-tv-shows.jpg?id=34049197&width=800&quality=90',
    },
    {
      name: 'Romance',
      image: 'https://i.ytimg.com/vi/HVr6qMh1USY/maxresdefault.jpg',
    },
    {
      name: 'War',
      image:
        'https://parade.com/.image/t_share/MTkwNTgwODc1MzUyMDI0MTg5/1917.jpg',
    },
    {
      name: 'Thriller',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Hitchcock_Hedren_Marnie_Publicity_Photo.jpg/300px-Hitchcock_Hedren_Marnie_Publicity_Photo.jpg',
    },
    {
      name: 'Sci-Fi',
      image:
        'https://parade.com/.image/t_share/MTkwNTgwODczNzM5ODM5MzU2/life.jpg',
    },
    {
      name: 'History',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/0*xBkxfSKhRe8U5EDP.jpg',
    },
  ];

  const handleClick = (genre: string) => {
    navigate(`/genre/${genre}`);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-x-2 gap-y-3 ">
        {genres.map((genre) => (
          <section
            key={genre.name}
            className="box-border h-64 w-64 bg-cover bg-center rounded-lg shadow-xl flex items-center justify-center font-bold text-2xl text-white outline-4"
            style={{ backgroundImage: `url(${genre.image})` }}
            onClick={() => handleClick(genre.name)}
          >
            <h2>{genre.name}</h2>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Categories;
