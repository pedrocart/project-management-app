import { useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';

const ModalForm = forwardRef(function ModalForm({ onSave }, ref) {

   const dialog = useRef();
   const formRef = useRef();

   useImperativeHandle(ref, () => ({
      open: () => {
         dialog.current.showModal();
      },
      close: () => {
         dialog.current.close();
      },
      reset: () => {
         formRef.current.reset();
      }
   }));

   function saveProject() {
      const form = dialog.current.querySelector('form');
      const formData = new FormData(form);
      const project = {
         title: formData.get('title'),
         description: formData.get('description'),
         dueDate: formData.get('due-date'),
         tasks: []
      };

      return project;
   }

   

   return createPortal(
      <dialog ref={dialog}>
         <button onClick={() => dialog.current.close()} type="button" className="text-sm text-right absolute right-3 top-3">X</button>

         <form ref={formRef} className="mt-8 max-w-md mx-auto p-6 rounded-lg flex flex-col gap-3 text-left">

            <label htmlFor="title">
               TITLE
               <input type="text" name="title" id="title" />
            </label>


            <label htmlFor="description">
               DESCRIPTION
               <textarea name="description" id="project-description"></textarea>
            </label>


            <label htmlFor="due-date">
               DUE DATE
               <input type="date" id="due-date" name="due-date" />
            </label>

            <button type="reset">Cancel</button>
            <button type="button" onClick={() => {onSave(saveProject());}}>Save</button>
         </form>
      </dialog>,
      document.getElementById('modal-root')
   );
});

export default ModalForm;
// Note: The above code uses createPortal to render the ProjectForm component into a specific DOM node with the id 'modal-root'.