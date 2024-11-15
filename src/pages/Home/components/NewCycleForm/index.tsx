import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informa a tarefa'),
  minutesAmount: z.number().min(5).max(60),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema >
export function NewCycleForm(){
  const {register, handleSubmit, watch,reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  return(
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput 
        id="task" 
        list="task-suggestions" 
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput  
        type="number" 
        id="minutesAmount" 
        placeholder="00" 
        step={5} 
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount',{valueAsNumber:true})}
        />
      
      <span>minutos</span>
    </FormContainer>
)
}