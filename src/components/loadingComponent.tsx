import { Loading } from '@nextui-org/react';

type Props = {};

export default function LoadingComponent(props: Props) {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <Loading size="xl" type="points" />
    </div>
  );
}
