import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        'Nightmare Before CHRISMAS',
        "CORPSE BRIDE",
        "MISS PEREGRINE",
        'Alice in WONDERLAND',
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
