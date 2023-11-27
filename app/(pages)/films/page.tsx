import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        "Miss Peregrine's Home for Peculiar Children",
        'Spirited Away',
        'The 5th Element',
        "The Pan's Labyrinth"
    ];
    return (
        <main className='absolute top-0 left-0 flex flex-col'>
            {nameFilms.map((name, index) => {
                return <CardFilms key={name} film={name} index={index + 1} />
            })}
        </main>
    );
}

export default Films;
