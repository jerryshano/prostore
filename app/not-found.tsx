import Link from 'next/link'
import Image from 'next/image'
import {Button} from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-center flex-col min-h-screen gap-2">
      <Image src="/images/cat.jpeg" width={300} height={300} alt="Cat"/>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}