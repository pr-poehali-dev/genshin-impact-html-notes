import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const elements = [
  { name: "Пиро", icon: "Flame", color: "from-orange-500 to-red-600", description: "Огненная стихия" },
  { name: "Гидро", icon: "Droplet", color: "from-blue-400 to-blue-600", description: "Водная стихия" },
  { name: "Электро", icon: "Zap", color: "from-purple-400 to-purple-600", description: "Электрическая стихия" },
  { name: "Крио", icon: "Snowflake", color: "from-cyan-300 to-blue-400", description: "Ледяная стихия" },
  { name: "Анемо", icon: "Wind", color: "from-teal-300 to-green-400", description: "Воздушная стихия" },
  { name: "Гео", icon: "Mountain", color: "from-yellow-600 to-amber-700", description: "Земляная стихия" },
  { name: "Дендро", icon: "Leaf", color: "from-green-400 to-emerald-600", description: "Природная стихия" }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-purple via-[#2D1B69] to-dark-purple text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-[#D946EF] to-[#0EA5E9] bg-clip-text text-transparent mb-6">
              Genshin Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Откройте врата в фантастический мир Тейвата — мир, где семь стихий сливаются воедино. 
              Вы — Путник, прибывший из другого мира в поисках своего потерянного близнеца.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <div className="px-6 py-3 bg-gradient-to-r from-primary to-[#D946EF] rounded-full font-semibold hover-scale cursor-pointer">
                Начать путешествие
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-[#D946EF] bg-clip-text text-transparent">
            Семь Стихий Тейвата
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {elements.map((element, index) => (
              <Card 
                key={element.name} 
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <CardContent className="p-6 flex flex-col items-center gap-4 relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${element.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={element.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{element.name}</h3>
                  <p className="text-sm text-gray-400 text-center">{element.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0EA5E9] to-primary bg-clip-text text-transparent">
            История Тейвата
          </h2>
          <Tabs defaultValue="story" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 backdrop-blur-sm">
              <TabsTrigger value="story" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-[#D946EF]">
                Основной Сюжет
              </TabsTrigger>
              <TabsTrigger value="world" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-[#D946EF]">
                Мир Тейвата
              </TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="mt-8 space-y-6 animate-fade-in">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Разделенные близнецы</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Вы и ваш брат или сестра путешествовали между мирами, пока неизвестная богиня не преградила вам путь. 
                        В битве вы были разделены, и теперь вы просыпаетесь в Тейвате, не зная, где находится ваш близнец.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Search" size={24} className="text-[#D946EF] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Поиски в Тейвате</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Ваше путешествие начинается в Мондштадте, городе свободы под покровительством Анемо Архонта. 
                        Вместе с загадочным спутником Паймон вы исследуете семь наций, каждая из которых посвящена одной из стихий.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Crown" size={24} className="text-[#0EA5E9] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Семь Архонтов</h3>
                      <p className="text-gray-300 leading-relaxed">
                        В поисках истины вы встретите Семь — богов, правящих нациями Тейвата. 
                        Каждый Архонт хранит свои секреты о прошлом этого мира и о судьбе вашего близнеца.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="world" className="mt-8 space-y-6 animate-fade-in">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Globe" size={28} className="text-primary" />
                    Семь Наций
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="pl-11">
                      <p className="font-semibold text-white mb-1">🍃 Мондштадт</p>
                      <p className="text-sm">Город свободы, земля ветра и поэзии</p>
                    </div>
                    <div className="pl-11">
                      <p className="font-semibold text-white mb-1">⛰️ Ли Юэ</p>
                      <p className="text-sm">Земля контрактов, где процветает торговля</p>
                    </div>
                    <div className="pl-11">
                      <p className="font-semibold text-white mb-1">⚡ Инадзума</p>
                      <p className="text-sm">Нация вечности под грозовым небом</p>
                    </div>
                    <div className="pl-11">
                      <p className="font-semibold text-white mb-1">🌿 Сумеру</p>
                      <p className="text-sm">Нация мудрости и древних знаний</p>
                    </div>
                    <div className="pl-11">
                      <p className="font-semibold text-white mb-1">⚖️ Фонтейн</p>
                      <p className="text-sm">Нация правосудия с водными судами</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Энциклопедия по миру Genshin Impact</p>
        </div>
      </footer>
    </div>
  );
}
