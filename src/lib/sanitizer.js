export default function SanitiseInput(original)  {
    

  return original.replace(/[<>&\%'"\/]/g, '');

}