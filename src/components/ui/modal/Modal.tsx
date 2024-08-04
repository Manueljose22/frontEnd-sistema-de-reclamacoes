import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure,} from '@chakra-ui/react'
import { useRef } from 'react'
import { Input } from '../input/Input'
import { IModal } from './types'






function ModalForm({editSubmit, handleOpenModal}: IModal) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)


    // const handleOpenModal = () =>{
    //     onOpen();
    // }
    
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar área</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={editSubmit}>
                <Input 
                    label={'Área'}
                    name={'area'}
                    type={'text'}
                    value=''
                    OnChange={(e)=>{}}
                    required={false}
                />
              </form>
              
            </ModalBody>
  
            <ModalFooter>
              <button onClick={onClose}>Cancelar</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {ModalForm}