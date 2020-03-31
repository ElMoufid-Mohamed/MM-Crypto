import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WalletComponent } from './components/wallet/wallet.component';


const routes: Routes = [
  { path: "Price", component: PriceComponent },
  { path: "Calculator", component: CalculatorComponent },
  { path: "Wallet", component: WalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
