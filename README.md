<h1>Back-end do projeto Dreams</h1>
<br/>
<p>A api do projeto Dreams foi criado com intuito de fazer uma aplicação com foco em metas financeiras, inspirada nas caixinhas do Nubank</p>

<hr />

<h3>O que eu usei para criar essa api?</h3>
<p>Foi utilizado a linguagem typescript, docker, prismaORM, fastify e a biblioteca zod para tipagem</p>
<br />
<h3>Rotas</h3>
<p>rota POST - "/create", esta rota tem o intuito(como o nome já diz) de criar a "caixinha de seus sonhos", que irá necessitar dos seguintes dados:</p>
<br />
<p>
  name: string <br />
  description: string <br />
  image: string <br />
  monthlyValue: number <br />
  finalResult: number <br />
  timeToResult: string <br />
</p>
<br />
<p>rota GET - "/", a rota home faz a listagem de todas os dados existentes no banco de dados</p>
