import React from 'react';
import { BookUser } from 'lucide-react';



const Title = () => {
    return (
       <div className="flex items-center gap-2 mb-6">
  <BookUser className="w-8 h-8 text-blue-600" />
  <h1 className="text-2xl font-bold">Agenda de Contatos</h1>
</div>

      );
}
 
export default Title;