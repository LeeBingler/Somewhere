import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        'The Fifth Element',
        'Spirited Away',
        "The Pan's Labyrinth",
        "Miss Peregrine's",
    ];

    return (
        <main className='flex flex-col select-none'>
            {nameFilms.map((name, index) => {
                return <CardFilms key={name} film={name} index={index + 1} />
            })}
        </main>
    );
}

export default Films;
