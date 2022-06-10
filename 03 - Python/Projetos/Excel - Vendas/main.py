import pandas as pd
from twilio.rest import Client

account_sid = "xxxxx"
auth_token  = "xxxxx"
client = Client(account_sid, auth_token)


lista_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho']

for mes in lista_meses:
    tabela_vendas = pd.read_excel(f'{mes}.xlsx')
    if (tabela_vendas['Vendas'] > 55000).any():
        vendedor = tabela_vendas.loc[tabela_vendas['Vendas'] > 55000, 'Vendedor'].values[0]
        vendas = tabela_vendas.loc[tabela_vendas['Vendas'] > 55000, 'Vendas'].values[0]
        message = client.messages.create(
            to="+5518996050998",
            from_="+19706959015",
            body=f'No mes {mes}, o vendedor {vendedor} fez um total de {vendas} vendas')
        print(message.sid)


