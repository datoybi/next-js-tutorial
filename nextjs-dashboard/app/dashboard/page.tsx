import { lusitana } from '../ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    totalPaidInvoices,
    numberOfInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  // 이런 패턴은 request waterfalls를 유발시킨다.
  // 어떨때는 이런 패턴이 필요할수도 있다. 그러나 필요하지 않을때는 의도치않은 성능 이슈를 유발시킬 수도 있다.
  // request waterfall을 피하는 방법은 평행적(parallel)으로 데이터를 fetch하는 것이다. -> promise.all()이나 promise.allsettled()를 사용하자.

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
