import {InfoOutlineIcon} from "@chakra-ui/icons"
import {FormControl, FormLabel, Input, Tooltip} from "@chakra-ui/react"

interface FakePasswordInputProps {
  label: string
  onClick: () => void
  tooltipText?: string
}

export function FakePasswordInput({label, onClick, tooltipText}: FakePasswordInputProps) {
  return (
    <FormControl>
      <FormLabel m={0}>
        {label}
        {tooltipText && (
          <Tooltip label={tooltipText} placement="right" aria-label={`Tooltip for form field ${label}`}>
            <InfoOutlineIcon fontSize="sm" color="gray.600" marginLeft={1} />
          </Tooltip>
        )}
      </FormLabel>
      <Input type="password" value="*********" onClick={onClick} />
    </FormControl>
  )
}
