export default function Reference() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <a className="underline w-40" href="https://www.pixiv.net/users/6512531">Artwork by Fid</a>
      <div className="pt-3 border-b border-neutral-600 pb-9">
        <div className="w-full flex gap-3 max-w-[1200px]">
          <a href="https://www.pixiv.net/artworks/100509987">
            <img className="bg-neutral-800" src="/gallery/luhrck/100509987_p0.png" alt="2022年のルルクの資料用立ち絵"/>
          </a>
          <a href="https://www.pixiv.net/artworks/100509987">
            <img className="bg-neutral-800" src="/gallery/luhrck/100509987_p1.png" alt="2022年のルルクの資料用立ち絵 コメント付き"/>
          </a>
        </div>
      </div>
      <div className="pt-5">
        <a className="underline w-40" href="https://twitter.com/NOSEKURA_SHIPPO">Artwork by Shippo</a>
        <div className="pt-3 w-full flex flex-wrap gap-3">
          <a className="w-[600px]" href="https://twitter.com/NOSEKURA_SHIPPO/status/1556955470304542720">
            <img className="bg-neutral-800" src="/gallery/luhrck/202204266.png" alt="Artwork by Shippo ナイフを構えるルルク"/>
          </a>
          <a className="w-[600px]" href="https://twitter.com/NOSEKURA_SHIPPO/status/1556956810967666688">
            <img className="bg-neutral-800" src="/gallery/luhrck/202204086.png" alt="Artwork by Shippo 弓を持つルルク"/>
          </a>
          <a href="https://www.pixiv.net/artworks/43885264" >
            <img className="w-full bg-neutral-800" src="/gallery/luhrck/201405120ルルクちゃん04.png" alt="Artwork by Shippo 川の横で灯りにあたるルルク"/>
          </a>
        </div>
      </div>
    </main>
  )
}
