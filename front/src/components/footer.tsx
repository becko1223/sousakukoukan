import Link from 'next/link'

export default function footer(){
    return(
        <>
        <div className="bg-white flex justify-center fixed bottom-0 w-full h-50">
        <Link href="/">交換</Link>
        <Link href="/koukannikki">文通</Link>
        <Link href="/friend">友達</Link>
        <Link href="/mypage">マイページ</Link>
        </div>
        </>
    );
}