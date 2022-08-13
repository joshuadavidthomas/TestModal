import * as React from "react";
import { AlertDialog } from "./AlertDialog";
import { OverlayContainer } from "react-aria";
import { Button } from "./Button";

export default function App() {
  let [isOpen, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      {/* prettier-ignore */}
      <p className="mt-8 mb-16 text-gray-600">This sandbox shows an example <strong><code>AlertDialog</code></strong> component built with <a href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Aria</a> and <a href="http://tailwindcss.com/" rel="noreferrer" target="_blank" className="text-blue-700 underline">Tailwind CSS</a> using the <code>useDialog</code> hook. It also uses <a href="https://reactcommunity.org/react-transition-group/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Transition Group</a> for CSS animations.</p>
      <Button variant="cta" onPress={() => setOpen(true)}>
        Delete…
      </Button>
      <OverlayContainer>
        <AlertDialog
          isOpen={isOpen}
          title="Delete folder"
          confirmLabel="Delete"
          variant="destructive"
          onClose={() => setOpen(false)}
        >
          Are you sure you want to delete "Documents"? All contents will be
          perminately destroyed.
        </AlertDialog>
      </OverlayContainer>
    </div>
  );
}
