export default function Home() {

  const anchorStyle = "text-gray-100 border w-64 h-9 rounded text-center hover:bg-gray-100 pt-1 hover:text-gray-900 transition duration-100 ease-in-out"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="background_wrap">
        <img src="./llk_no_bg.webp" alt="背景画像のルルク" />
      </div>
      <div className="absolute left-10 top-10">
        <h1>Luhrck.com</h1>

        <div className="flex flex-col gap-1">
          <a className={anchorStyle} href="https://album.luhrck.com">イベントの写真</a><br />
          <a className={anchorStyle} href="https://pixiv.me/filiarc">pixiv: filiarc</a><br />
          <a className={anchorStyle} href="https://concrnt.world/luhrck.com">Concrnt: @luhrck.com</a><br />
          <a className={anchorStyle} href="https://twitter.com/Fi9c">Twitter: @Fi9c</a><br />
          <a className={anchorStyle} href="https://twitter.com/Fi0a">Twitter: @Fi0a</a><br />
          <a className={anchorStyle} href="https://bsky.app/profile/luhrck.com">Bluesky: luhrck.com</a><br />
        </div>
      </div>
    </main>
  )
}
