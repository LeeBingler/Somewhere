import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        "Miss Peregrine's",
        'Spirited Away',
        "The Pan's Labyrinth",
        'The 5th Element',
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
