import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        "CORPSE BRIDE",
        '9',
        'Nightmare BEFORE Christmas',
        "MISS PEREGRINE",
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
