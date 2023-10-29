import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { IconButton } from "./IconButton";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";
import { Input } from "./Input";

export function TodoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton Icon={PlusCircledIcon} />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-zinc-900 bg-opacity-30 flex justify-center items-center fixed inset-0">
          <DialogContent className="w-96 bg-gray-700 rounded-xl p-5">
            <DialogTitle className="text-emerald-500 text-center text-3xl">
              Nova tarefa
            </DialogTitle>
            <div className="flex flex-col gap-3">
              <Form.Root className="w-full">
                <Form.Field className="grid mb-[10px]" name="name">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                      Nome
                    </Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]">
                      Please enter your email
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <Input
                      type="text"
                      placeholder="Digite o nome da tarefa"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="description">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                      Descrição
                    </Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]">
                      Please enter your email
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <Input
                      type="text"
                      placeholder="Digite a descrição da tarefa"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Submit className="mt-5" asChild>
                  <div className="w-full flex justify-end">
                    <DialogClose>
                      <Button className="w-28">Salvar</Button>
                    </DialogClose>
                  </div>
                </Form.Submit>
              </Form.Root>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
