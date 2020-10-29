import { Controller, Get, UseGuards, Request, Param, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller()
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) { }


  @Get('/rateBase')
  rateBase(@Query() params) {
    return this.currencyService.rateBase(params.base);
  }

  @Get('/convert')
  convertAmount(@Query() params) {
    return this.currencyService.convertAmount(params.fromCurrency, params.toCurrency, params.amount);
  }
}
