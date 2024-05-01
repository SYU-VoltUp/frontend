export function SearchResults({ stations, searching }) {
    return (
      <article aria-busy={searching}>
        {searching ? (
          "잠시만 기다려주세요. 국가를 검색하고 있습니다."
        ) : (
          <>
            <header>총 {stations.length}개의 국가가 검색되었습니다.</header>
            <ul>
              {stations.map(({ code, parameter }) => (
                <li key={code}>
                  {parameter}
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    );
}