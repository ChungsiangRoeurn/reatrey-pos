import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Page() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month",
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+15%",
      trend: "up",
      icon: ShoppingCart,
      description: "from last month",
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+5.2%",
      trend: "up",
      icon: Users,
      description: "from last month",
    },
    {
      title: "Products",
      value: "573",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      description: "from last month",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      amount: "$89.99",
      status: "completed",
      time: "2 min ago",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      amount: "$156.50",
      status: "pending",
      time: "5 min ago",
    },
    {
      id: "ORD-003",
      customer: "Bob Johnson",
      amount: "$43.25",
      status: "completed",
      time: "8 min ago",
    },
    {
      id: "ORD-004",
      customer: "Alice Brown",
      amount: "$234.75",
      status: "processing",
      time: "12 min ago",
    },
    {
      id: "ORD-005",
      customer: "Charlie Wilson",
      amount: "$67.80",
      status: "completed",
      time: "15 min ago",
    },
  ];

  const topProducts = [
    { name: "Espresso", sold: 234, revenue: "$1,404.00", change: "+12%" },
    { name: "Cappuccino", sold: 198, revenue: "$1,188.00", change: "+8%" },
    { name: "Latte", sold: 156, revenue: "$1,092.00", change: "+15%" },
    { name: "Americano", sold: 143, revenue: "$858.00", change: "+5%" },
    { name: "Mocha", sold: 98, revenue: "$686.00", change: "-3%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Reatrey</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span
                        className={
                          stat.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {stat.change}
                      </span>
                      <span className="ml-1">{stat.description}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Orders */}
            <Card className="md:col-span-1 lg:col-span-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      Latest customer orders and their status
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col">
                          <span className="font-medium">{order.customer}</span>
                          <span className="text-sm text-muted-foreground">
                            {order.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <div className="text-right">
                          <div className="font-medium">{order.amount}</div>
                          <div className="text-sm text-muted-foreground">
                            {order.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card className="md:col-span-1 lg:col-span-3">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>
                      Best performing products this month
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-sm font-medium">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {product.sold} sold
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{product.revenue}</div>
                        <div
                          className={`text-sm ${
                            product.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {product.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts for your POS system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button className="h-20 flex-col gap-2" variant="outline">
                  <ShoppingCart className="h-6 w-6" />
                  New Sale
                </Button>
                <Button className="h-20 flex-col gap-2" variant="outline">
                  <Package className="h-6 w-6" />
                  Inventory
                </Button>
                <Button className="h-20 flex-col gap-2" variant="outline">
                  <Users className="h-6 w-6" />
                  Customers
                </Button>
                <Button className="h-20 flex-col gap-2" variant="outline">
                  <TrendingUp className="h-6 w-6" />
                  Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
