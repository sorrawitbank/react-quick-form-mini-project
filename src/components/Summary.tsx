import { CircleCheck, RefreshCw } from "lucide-react";
import Button from "./common/Button";

interface Props {
  name: string;
  email: string;
  movie: string;
  handleReset: () => void;
  comment?: string;
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>;
}

function Summary(props: Props) {
  return (
    <div className="flex flex-col p-6 bg-white">
      <div className="p-4 mb-6 bg-brand-soft-green border border-grey-50 rounded-lg">
        <div className="flex items-center gap-4 mb-4 text-brand-green text-lg font-medium">
          <CircleCheck size={20} />
          <h2>ส่งแบบสำรวจสำเร็จ!</h2>
        </div>
        <div className="flex text-sm">
          <div className="flex flex-col gap-2 w-1/4 text-gray-500">
            <span>ชื่อ:</span>
            <span>อีเมล์:</span>
            <span>หนังที่เลือก:</span>
          </div>
          <div className="flex flex-col flex-1 gap-2 text-grey-200">
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span className="text-brand-purple">{props.movie}</span>
          </div>
        </div>
        {props.comment && (
          <div className="mt-3 pt-4 text-sm border-t border-grey-50">
            <span className="text-gray-500">ความคิดเห็น</span>
            <p className="p-3 text-grey-200">{props.comment}</p>
          </div>
        )}
      </div>
      <Button
        textColor="white"
        bgColor="black"
        onClick={() => {
          props.setIsSend(false);
          props.handleReset();
        }}
      >
        <RefreshCw size={16} /> ทำแบบสำรวจใหม่
      </Button>
    </div>
  );
}

export default Summary;
