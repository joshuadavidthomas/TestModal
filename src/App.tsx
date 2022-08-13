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
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Nibh praesent tristique magna sit amet purus gravida quis blandit. Diam volutpat commodo sed egestas egestas. Parturient montes nascetur ridiculus mus mauris vitae. Arcu cursus vitae congue mauris. Et ultrices neque ornare aenean euismod elementum nisi. Rhoncus mattis rhoncus urna neque viverra justo nec. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Non arcu risus quis varius quam quisque. Mi proin sed libero enim sed faucibus. Mollis aliquam ut porttitor leo.
</p>
<p>
Diam sollicitudin tempor id eu. Suspendisse faucibus interdum posuere lorem ipsum dolor. Quis viverra nibh cras pulvinar. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Vel fringilla est ullamcorper eget nulla facilisi. Est sit amet facilisis magna etiam tempor. Pulvinar pellentesque habitant morbi tristique senectus et netus. Neque viverra justo nec ultrices dui. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mi proin sed libero enim sed faucibus turpis in eu. Aliquet nibh praesent tristique magna sit amet purus. In ornare quam viverra orci sagittis. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
</p>
<p>
At lectus urna duis convallis convallis tellus id interdum. Sit amet tellus cras adipiscing enim eu turpis egestas. Aenean sed adipiscing diam donec. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Iaculis at erat pellentesque adipiscing commodo. Non enim praesent elementum facilisis. Suspendisse potenti nullam ac tortor vitae. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Proin nibh nisl condimentum id venenatis a condimentum vitae. Lobortis mattis aliquam faucibus purus in massa tempor nec. Proin sagittis nisl rhoncus mattis rhoncus. Nam aliquam sem et tortor consequat id porta. Amet facilisis magna etiam tempor orci. In nulla posuere sollicitudin aliquam ultrices sagittis. Penatibus et magnis dis parturient montes nascetur. Justo donec enim diam vulputate ut. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Morbi tristique senectus et netus. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
</p>
<p>
Viverra adipiscing at in tellus integer feugiat scelerisque. Urna neque viverra justo nec. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Purus in massa tempor nec feugiat. Nibh sit amet commodo nulla. At lectus urna duis convallis convallis. Sapien pellentesque habitant morbi tristique senectus. Auctor augue mauris augue neque gravida. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Morbi tristique senectus et netus. Sit amet nisl suscipit adipiscing. Sagittis vitae et leo duis ut diam. Urna porttitor rhoncus dolor purus. Suscipit tellus mauris a diam. Auctor augue mauris augue neque. Mauris commodo quis imperdiet massa tincidunt nunc.
</p>
<p>
Integer eget aliquet nibh praesent tristique magna sit amet. Id porta nibh venenatis cras sed felis eget. Lacus vestibulum sed arcu non. Augue interdum velit euismod in pellentesque massa. Facilisi etiam dignissim diam quis enim. Et netus et malesuada fames ac turpis. Orci eu lobortis elementum nibh tellus molestie nunc non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nisi vitae suscipit tellus mauris a diam. Ut morbi tincidunt augue interdum. Adipiscing bibendum est ultricies integer quis. Sed velit dignissim sodales ut eu sem integer vitae. Euismod in pellentesque massa placerat. Justo eget magna fermentum iaculis eu non diam.
</p>
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
