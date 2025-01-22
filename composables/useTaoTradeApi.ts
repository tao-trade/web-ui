export const useTaoTradeApi = () => {
  const config = useRuntimeConfig()
  
  const fetchSimulations = async () => {
    return await useFetch(`${config.public.apiBase}/simulations`)
  }
  
  return {
    fetchSimulations
  }
}
