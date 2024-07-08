import { Button, Input } from '@repo/ui/shadcn'
import '@repo/ui/global-css'
function App() {

  return (
    <>
      <div className="bg-purple-300">
        <Button>Hello</Button>
        <Input name='hello' />
      </div>
    </>
  )
}

export default App
