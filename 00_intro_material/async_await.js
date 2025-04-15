const movePlayer = (direction, distance) => console.log(direction, distance);

async function playerStart() {
    await movePlayer('left', 100); //pause
    await movePlayer('right', 200); //pause
    await movePlayer('up', 300); //pause
    await movePlayer('down', 400); //pause
}

playerStart();

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    const filteredData = data.filter(user => user.id >= 1 && user.id <= 5);
    const simplifiedData = filteredData.map(user => ({
        id: user.id,
        name: user.name,
    }));
    console.log(simplifiedData);
}

fetchUsers();