import Button from './UI/Button';

export default function Numpad() {
  return (
    <div className="grid grid-cols-4 gap-0.5 max-w-xs bg-black p-2">
      <Button className="bg-red-500 col-span-2">AC</Button>
      <Button className="bg-gray-400">÷</Button>
      <Button className="bg-gray-400">x</Button>
      <Button className="bg-gray-600">7</Button>
      <Button className="bg-gray-600">8</Button>
      <Button className="bg-gray-600">9</Button>
      <Button className="bg-gray-400">-</Button>
      <Button className="bg-gray-600">4</Button>
      <Button className="bg-gray-600">5</Button>
      <Button className="bg-gray-600">6</Button>
      <Button className="bg-gray-400">x</Button>
      <Button className="bg-gray-600">1</Button>
      <Button className="bg-gray-600">2</Button>
      <Button className="bg-gray-600">3</Button>
      <Button className="bg-blue-500 row-span-2">=</Button>
      <Button className="bg-gray-600 col-span-2">0</Button>
      <Button className="bg-gray-600">.</Button>
    </div>
  );
}
