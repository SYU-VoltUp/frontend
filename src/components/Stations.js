const station = [{code: 1, parameter: 'A'},
    {code: 2, parameter: 'B'},
    {code: 3, parameter: 'C'},
    {code: 4, parameter: 'D'},
    {code: 5, parameter: 'AB'},
    {code: 6, parameter: 'CDE'}
];

export async function fetchStations(query) {
    await new Promise((r) => setTimeout(r, 2_000)); // 2초 지연
    return station.filter(
      (station) =>
        station.parameter.toLowerCase().includes(query.toLowerCase())
    );
}