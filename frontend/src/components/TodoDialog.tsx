import {
  Dialog,
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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoType } from "../types/todo";
import { create } from "../services/todo/create";

const TodoSchema = z.object({
  name: z
    .string()
    .min(1, "Informe o nome da tarefa")
    .max(20, "Não ultrapasse 20 caracteres no nome"),
  description: z
    .string()
    .min(1, "Informe a descrição da tarefa")
    .max(40, "Não ultrapasse 40 caracteres na descrição"),
});

type TodoTypeInferred = z.infer<typeof TodoSchema>;

export function TodoDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoTypeInferred>({
    resolver: zodResolver(TodoSchema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      queryClient.setQueryData<TodoType[] | undefined>(
        "todos",
        (previousData) =>
          previousData !== undefined ? [...previousData, data] : [data]
      );
    },
  });

  async function createTodo({ name, description }: TodoTypeInferred) {
    await mutation.mutateAsync({ name, description });
    setOpen(false);
    reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <IconButton Icon={PlusCircledIcon} />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-zinc-900 bg-opacity-40 flex justify-center items-center fixed inset-0">
          <DialogContent className="w-[500px] bg-gray-700 rounded-xl py-5 px-7">
            <DialogTitle className="text-emerald-500 text-center text-3xl">
              Nova tarefa
            </DialogTitle>
            <div className="flex flex-col gap-3 mt-4">
              <Form.Root className="w-full" onSubmit={handleSubmit(createTodo)}>
                <Form.Field className="grid mb-[10px]" name="name">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="leading-[35px] text-zinc-200">
                      Nome
                    </Form.Label>
                    {errors.name && (
                      <Form.Message className="text-red-600">
                        {errors.name.message}
                      </Form.Message>
                    )}
                  </div>
                  <Form.Control asChild>
                    <Input
                      type="text"
                      placeholder="Digite o nome da tarefa"
                      {...register("name")}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="description">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="leading-[35px] text-zinc-200">
                      Descrição
                    </Form.Label>
                    {errors.description && (
                      <Form.Message className="text-red-600">
                        {errors.description.message}
                      </Form.Message>
                    )}
                  </div>
                  <Form.Control asChild>
                    <Input
                      type="text"
                      placeholder="Digite a descrição da tarefa"
                      {...register("description")}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Submit className="mt-5 w-full flex justify-end" asChild>
                  <Button type="submit" className="w-28">
                    Salvar
                  </Button>
                </Form.Submit>
              </Form.Root>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
