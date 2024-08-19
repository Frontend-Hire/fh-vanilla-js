import Text from './Text';

export default function App() {
  return (
    <div className="space-y-4 px-4 py-2">
      <Text>This should be a small text!</Text>

      <Text>This should be a large text!</Text>

      <Text>This should have a size of 50px</Text>

      <Text>This should have a size of 5rem</Text>
    </div>
  );
}
