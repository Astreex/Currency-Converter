import { useState, useEffect, useMemo, useContext, createContext, } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TextField from '@mui/material/TextField';


type RequestType = {
  [key: string]: number
}

const ColorModeContext = createContext({ styledConverter: () => { } });

export default function Converter() {
  const [data, setData] = useState({} as RequestType)
  const [firstSelect, setFirstSelect] = useState('USD')
  const [secondSelect, setSecondSelect] = useState("RUB")
  const [firstInput, setFirstInput] = useState('0')
  const [secondInput, setSecondInput] = useState('0')
  const actions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.']

  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  useEffect(() => {
    try {
      const fetchData = async () => {
        await axios.get('https://v6.exchangerate-api.com/v6/8ae70399639bc4d193901496/latest/USD')
          .then(response => setData(response.data.conversion_rates))
      }
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }, [])
  const handleChangeFirstSelect = (event: SelectChangeEvent) => {
    const target = event.target.value
    setFirstSelect(target as string);
    const firstNumber = Number(firstInput)
    let contentOne: any = []
    let contentTwo: any = []
    for (let idx in data) {
      if (idx == target) {
        contentOne.push(target, data[idx])
      }
      if (idx == secondSelect) {
        contentTwo.push(idx, data[idx])
      }
    }
    let result = firstNumber * (contentTwo[1] / contentOne[1])
    result = (Math.round(result * 10000)) / 10000
    setSecondInput(`${result}`)
  };

  const handleChangeSecondSelect = (event: SelectChangeEvent) => {
    const target = event.target.value
    setSecondSelect(target as string);
    const secondNumber = Number(firstInput)
    let contentOne: any = []
    let contentTwo: any = []
    for (let idx in data) {
      if (idx == firstSelect) {
        contentOne.push(idx, data[idx])
      }
      if (idx == target) {
        contentTwo.push(idx, data[idx])
      }
    }
    console.log(contentOne, contentTwo)
    let result = secondNumber * (contentTwo[1] / contentOne[1])
    result = (Math.round(result * 10000)) / 10000
    setSecondInput(`${result}`)
  };

  const handleChangeFirstInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target.value
    if (actions.includes(target[target.length - 1]) && target.length < 13) {
      if (firstInput[0] == '0' && target.length == 2 && target[1] != '0' && target[1] != '.' && target[1] != ',') {
        let secondNumber = target[1]
        target = firstInput.substring(0, firstInput.length - 1) + secondNumber
      }
      if (firstInput[0] == '0' && target[1] == '0' && !target[0]) {
        target = firstInput
      }
      if (!firstInput[0] && target[0] == '.') {
        target = '0.' + firstInput
      } else if (!firstInput[0] && target[0] == ',') {
        target = '0.' + firstInput
      }
      if (target[target.length - 1] == ',') {
        target = firstInput + '.'
      }
      if ((firstInput.includes(',') || firstInput.includes('.')) && (target.includes(',') || target.includes('.')) && (target[target.length - 1] == ',' || target[target.length - 1] == '.') && firstInput.length < target.length) {
        target = firstInput
      }
      if (firstInput[0] == '0' && target[1] == '0' && target[0] == '0') {
        target = firstInput
      }
      setFirstInput(target)
      const firstNumber = Number(target)
      let contentOne: any = []
      let contentTwo: any = []
      for (let idx in data) {
        if (idx == firstSelect) {
          contentOne.push(firstSelect, data[idx])
        }
        if (idx == secondSelect) {
          contentTwo.push(idx, data[idx])
        }
      }
      let result = firstNumber * (contentTwo[1] / contentOne[1])
      result = (Math.round(result * 10000)) / 10000
      setSecondInput(`${result}`)
    } else {
      if (!target && firstInput.length == 1) {
        target = '0'
        setFirstInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentTwo[1] / contentOne[1])
        setSecondInput(`${result}`)
      }
      if (firstInput.length > target.length) {
        setFirstInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentTwo[1] / contentOne[1])
        setSecondInput(`${result}`)
      }
    }
  }

  const handleChangeSecondInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target.value
    if (actions.includes(target[target.length - 1]) && target.length < 13) {
      if (secondInput[0] == '0' && target.length == 2 && target[1] != '0' && target[1] != '.' && target[1] != ',') {
        let secondNumber = target[1]
        target = secondInput.substring(0, secondInput.length - 1) + secondNumber
      }
      if (secondInput[0] == '0' && target[1] == '0' && !target[0]) {
        target = secondInput
      }
      if (!secondInput[0] && target[0] == '.') {
        target = '0.' + secondInput
      } else if (!secondInput[0] && target[0] == ',') {
        target = '0.' + secondInput
      }
      if (target[target.length - 1] == ',') {
        target = secondInput + '.'
      }
      if ((secondInput.includes(',') || secondInput.includes('.')) && (target.includes(',') || target.includes('.')) && (target[target.length - 1] == ',' || target[target.length - 1] == '.') && secondInput.length < target.length) {
        target = secondInput
      }
      if (secondInput[0] == '0' && target[1] == '0' && target[0] == '0') {
        target = secondInput
      }
      setSecondInput(target)
      const firstNumber = Number(target)
      let contentOne: any = []
      let contentTwo: any = []
      for (let idx in data) {
        if (idx == firstSelect) {
          contentOne.push(firstSelect, data[idx])
        }
        if (idx == secondSelect) {
          contentTwo.push(idx, data[idx])
        }
      }
      let result = firstNumber * (contentOne[1] / contentTwo[1])
      result = (Math.round(result * 10000)) / 10000
      setFirstInput(`${result}`)
    } else {
      if (!target && secondInput.length == 1) {
        target = '0'
        setSecondInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentOne[1] / contentTwo[1])
        setFirstInput(`${result}`)
      }
      if (secondInput.length > target.length) {
        setSecondInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentOne[1] / contentTwo[1])
        setFirstInput(`${result}`)
      }
    }
  }

  const getStyledSelectData = (data: RequestType) => {
    let content = []
    for (let idx in data) {
      content.push(<MenuItem key={idx} value={idx}>{idx}</MenuItem>)
    }
    return content
  }

  const currencyReverse = () => {
    setFirstSelect(secondSelect)
    setSecondSelect(firstSelect)
    setSecondInput(firstInput)
    setFirstInput(secondInput)
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute',
          top: '2px',
          right: '22px',
          width: '20px',
          height: '20px',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
        }}>
        <IconButton
          onClick={colorMode.styledConverter} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Container sx={{bgcolor: 'background.default'}}>
        <Typography variant='h4' sx={{ marginTop: 3, textAlign: 'center' }}>Currency Converter</Typography>
        <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'space-around', margin: 2 }}>
          <FormControl sx={{ "& button:Mui-selected": {color:"success"},}}>
            <InputLabel>From</InputLabel>
            <Select
              value={firstSelect}
              label={"From"}
              onChange={handleChangeFirstSelect}
            >
              {data && getStyledSelectData(data)}
            </Select>
          </FormControl>
          <IconButton sx={{ marginTop: 0.5, position: 'absolute' }} color='inherit' onClick={() => currencyReverse()}>
            <SwapHorizIcon fontSize='large' />
          </IconButton>
          <FormControl>
            <InputLabel color='primary' >To</InputLabel>
            <Select
              value={secondSelect}
              label="To"
              onChange={handleChangeSecondSelect}
            >
              {data && getStyledSelectData(data)}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'space-around', margin: 2, flexWrap: 'wrap' }}>
        <TextField
          value={firstInput}
          onChange={handleChangeFirstInput}
          size="small"
          />
        <TextField
          value={secondInput}
          onChange={handleChangeSecondInput}
          size="small"
        />
        </Box>
      </Container>
    </>
  )
}

export function StyledConverter() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...grey,
        ...(mode === 'dark' ? {
          main: grey[50],
        } :
          {
            main: grey[900]
          }),
      },
      ...(mode === 'dark' && {
        background: {
          default: '#202020',
          paper: '#202020'
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
            primary: '#202020'
          }
          : {
            primary: grey[50]
          }),
      },
    },
  });
  const theme = createTheme(getDesignTokens(mode))

  const colorMode = useMemo(
    () => ({
      styledConverter: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Converter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
