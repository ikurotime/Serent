import { Loading } from '@nextui-org/react';

type Props = {};

export default function LoadingComponent(props: Props) {
  return (
    <div className="flex m-auto justify-center">
      <Loading size="xl" type="points" />
    </div>
  );
}
